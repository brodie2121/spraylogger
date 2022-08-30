import React from "react";
import { Form } from "react-bootstrap";
//Date picker not working at the moment
//Need to figure out why
class DatepickerComponent extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <Form.Group controlId="doj">
              <Form.Label>Select Date</Form.Label>
              <Form.Control
                type="date"
                name="doj"
                defaultValue={this.props.selectedValue}
                placeholder="Date of Joining"
                onChange={(e) => this.props.onChange(e)}
              />
            </Form.Group>
          </div>
        </div>
      </div>
    );
  }
}

export default DatepickerComponent;
