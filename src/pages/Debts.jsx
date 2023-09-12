import {
  Button,
  Col,
  FloatingLabel,
  Form,
  InputGroup,
  Modal,
  Row,
} from "react-bootstrap";
import React, { Fragment, useState } from "react";

const Debts = () => {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [selected, setSelected] = useState(null);

  const [debt, setDebt] = useState({
    price: null,
    decription: "",
    phone: "",
    takeDate: "",
    giveDate: "",
  });

  const [debts, setDebts] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const showForm = () => {
    handleShow();
    setValidated(false);
    setDebt({
      price: null,
      decription: "",
      phone: "",
      takeDate: "",
      giveDate: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setValidated(true);
    const form = event.currentTarget;
    if (form.checkValidity()) {
      if (selected) {
        let newDebts = debts.map((el) => {
          if (el.id === selected) {
            return debt;
          } else {
            return el;
          }
        });
        setDebts(newDebts);
      } else {
        setDebts([...debts, { ...debt, id: debts.length + 1 }]);
      }
      handleClose();
    }
  };

  const handleChange = (e) => {
    setDebt({ ...debt, [e.target.name]: e.target.value });
  };

  const edit = (id) => {
    let debt = debts.find((debt) => debt.id === id);
    setDebt(debt);
    setSelected(id);
    handleShow();
  };
  const delet = (id) => {
    const updatedDebts = debts.filter((debt) => debt.id !== id);
    setDebts(updatedDebts);
  };

  return (
    <Fragment>
      <div className="py-10">
        <h1 className="text-4xl font-bold text-center">Debts</h1>
        <Button onClick={showForm} className="button">
          Add
        </Button>
      </div>
      {debts.map((debt, index) => (
        <div
          className="flex items-center justify-between w-full p-4 my-10 bg-gray-200"
          key={index}
        >
          <p className="font-bold">{index + 1}.</p>
          <p className="flex flex-col items-center">
            <span className="font-bold">Name</span>
            {debt.name}
          </p>
          <p className="flex flex-col items-center">
            <span className="font-bold">Price</span>
            {debt.price}$
          </p>

          <div className="flex gap-4">
            <p className="flex flex-col items-center">
              <span className="font-bold">Take Date</span>
              {debt.takeDate}
            </p>
            <p className="flex flex-col items-center">
              <span className="font-bold">Give Date</span>
              {debt.giveDate}
            </p>
          </div>
          <div className="flex gap-4">
            <button className="button" onClick={() => edit(debt.id)}>
              Edit
            </button>
            <button className="button" onClick={() => delet(debt.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}

      <Modal show={show} onHide={handleClose}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>New Lending</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label className="font-bold">Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="name..."
                value={debt.name}
                name="name"
                onChange={handleChange}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label className="font-bold">Price</Form.Label>
              <InputGroup hasValidation className="mb-3">
                <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                <Form.Control
                  required
                  value={debt.price}
                  name="price"
                  onChange={handleChange}
                  type="number"
                  placeholder="Price"
                />

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please fill !
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group>
              <Form.Label className="font-bold">Comment</Form.Label>
              <FloatingLabel
                hasValidation
                className="mb-3"
                controlId="floatingTextarea2"
                label="Comments"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Enter your comments"
                  required
                  onChange={handleChange}
                  value={debt.decription}
                  name="decription"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please fill !
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>

            <Form.Group>
              <Row className="mb-3">
                <Form.Group hasValidation as={Col} md="6" controlId="date">
                  <Form.Label className="font-bold">Take Date</Form.Label>
                  <Form.Control
                    required
                    type="date"
                    onChange={handleChange}
                    value={debt.takeDate}
                    name="takeDate"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please fill !
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                  <Form.Label className="font-bold">Give Date</Form.Label>
                  <Form.Control
                    required
                    type="date"
                    onChange={handleChange}
                    value={debt.giveDate}
                    name="giveDate"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please fill !
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="button"
              variant="secondary"
              onClick={handleClose}
            >
              Close
            </Button>
            <Button className="button" type="submit" variant="primary">
              {selected ? "Save" : "Add"} debt
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Fragment>
  );
};

export default Debts;
