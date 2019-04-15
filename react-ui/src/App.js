import React, { Component } from "react";
import "./App.css";

const sendEmail = (studentData, userName = "Anakin Skywalker") => {
  return fetch("/api/send_email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ studentData, userName })
  }).then(response => response.json());
};

class App extends Component {
  clearFields = () => {
    this.getName.value = '';
    this.getDOB.value = '';
    this.getNumber.value = '';
    this.getEmail.value = '';
    this.getAddress.value = '';
    this.getCity.value = '';
    this.getPincode.value = '';
    this.get10Board.value = '';
    this.get10School.value = '';
    this.get10Stream.value = '';
    this.get10YOP.value = '';
    this.get10Medium.value = '';
    this.get12Board.value = '';
    this.get12School.value = '';
    this.get12Stream.value = '';
    this.get12YOP.value = '';
    this.get12Medium.value = '';

    this.getGradutionDegree.value = '';
    this.getGradutionSchool.value = '';
    this.getGradutionStream.value = '';
    this.getGradutionYOP.value = '';
    this.getGradutionMedium.value = '';
    this.getPGSchool.value = '';
    this.getPGSchool.value = '';
    this.getPGStream.value = '';
    this.getPGYOP.value = '';
    this.getPGMedium.value = '';

    this.getOrganization.value = '';
    this.getDesignation.value = '';
    this.getDuration.value = '';

    this.getCHKFriend.value = '';

  }
  handleSubmit = (e) => {
    e.preventDefault();
    const name = this.getName.value;
    const dob = this.getDOB.value;
    const number = this.getNumber.value;
    const email = this.getEmail.value;
    const address = this.getAddress.value;
    const city = this.getCity.value;
    const pinCode = this.getPincode.value;
    const t_board = this.get10Board.value;
    const t_school = this.get10School.value;
    const t_Stream = this.get10Stream.value;
    const t_yop = this.get10YOP.value;
    const t_medium = this.get10Medium.value;
    const tw_board = this.get12Board.value;
    const tw_school = this.get12School.value;
    const tw_Stream = this.get12Stream.value;
    const tw_yop = this.get12YOP.value;
    const tw_medium = this.get12Medium.value;
    const g_board = this.getGradutionDegree.value;
    const g_school = this.getGradutionSchool.value;
    const g_Stream = this.getGradutionStream.value;
    const g_yop = this.getGradutionYOP.value;
    const g_medium = this.getGradutionMedium.value;
    const pg_board = this.getPGDegree.value;
    const pg_school = this.getPGSchool.value;
    const pg_Stream = this.getPGStream.value;
    const pg_yop = this.getPGYOP.value;
    const pg_medium = this.getPGMedium.value;

    const Org = this.getOrganization.value;
    const Des = this.getDesignation.value;
    const Dur = this.getDuration.value;

    const ref_Frnds = this.getCHKFriend.value;
    const ref_Paper = this.getCHKNewsPaper.value;
    const ref_Site = this.getCHKWebsite.value;
    const ref_JD = this.getCHKJustDail.value;
    const ref_Other = this.getCHKOther.value;
    const ref_Sulekha = this.getCHKSulekha.value;

    const data = {
      id: new Date(),
      name,
      dob,
      number,
      address,
      city,
      email,
      pinCode,
      t_board,
      t_Stream,
      t_medium,
      t_school,
      t_yop,
      tw_board,
      tw_Stream,
      tw_medium,
      tw_school,
      tw_yop,
      g_board,
      g_Stream,
      g_medium,
      g_school,
      g_yop,
      pg_board,
      pg_Stream,
      pg_medium,
      pg_school,
      pg_yop,
      Org,
      Des,
      Dur,
      ref_Frnds,
      ref_JD,
      ref_Other,
      ref_Paper,
      ref_Site,
      ref_Sulekha
    }

    //  this.clearFields();
    sendEmail(data).then(({ message }) => {
      alert(message);
    });
  }

  render() {
    return (
      <div className="post-container">
        <h1 className="post_heading">Student Registration Form</h1>
        <form className="form" onSubmit={this.handleSubmit} >
          <input className="textbox" required type="text" ref={(input) => this.getName = input}
            placeholder="Student Name" /><br />
          <input required type="text" ref={(input) => this.getDOB = input}
            placeholder="Date of Birth (DD/MM/YYY)" /><br />
          <input required type="text" ref={(input) => this.getNumber = input}
            placeholder="Contact Number" /><br />
          <input required type="text" ref={(input) => this.getEmail = input}
            placeholder="Email Id" /><br />
          <input required type="text" ref={(input) => this.getAddress = input}
            placeholder="Address" /><br />
          <input required type="text" ref={(input) => this.getCity = input}
            placeholder="City" /><br />
          <input required type="text" ref={(input) => this.getPincode = input}
            placeholder="Pincode" /><br />
          <hr />
          <h1 className="post_heading">Academic / Professional Qualification</h1>
          <h1 className="">10Th Details</h1>
          <input required type="text" ref={(input) => this.get10Board = input}
            placeholder="10TH Board" /><br />
          <input required type="text" ref={(input) => this.get10School = input}
            placeholder="10TH School/College Name" /><br />
          <input required type="text" ref={(input) => this.get10Stream = input}
            placeholder="10Th Stream" /><br />
          <input required type="text" ref={(input) => this.get10YOP = input}
            placeholder="10Th Year of passing" /><br />
          <input required type="text" ref={(input) => this.get10Medium = input}
            placeholder="10Th Medium" /><br />
          <h1 className="">12Th Details</h1>
          <input required type="text" ref={(input) => this.get12Board = input}
            placeholder="12TH Board" /><br />
          <input required type="text" ref={(input) => this.get12School = input}
            placeholder="12TH School/College Name" /><br />
          <input required type="text" ref={(input) => this.get12Stream = input}
            placeholder="12Th Stream" /><br />
          <input required type="text" ref={(input) => this.get12YOP = input}
            placeholder="12Th Year of passing" /><br />
          <input required type="text" ref={(input) => this.get12Medium = input}
            placeholder="12Th Medium" /><br />
          <h1 className="">Gradution Details</h1>
          <input required type="text" ref={(input) => this.getGradutionDegree = input}
            placeholder="Gradution Degree" /><br />
          <input required type="text" ref={(input) => this.getGradutionSchool = input}
            placeholder="Gradution College Name" /><br />
          <input required type="text" ref={(input) => this.getGradutionStream = input}
            placeholder="Gradution Stream" /><br />
          <input required type="text" ref={(input) => this.getGradutionYOP = input}
            placeholder="Gradution Year of passing" /><br />
          <input required type="text" ref={(input) => this.getGradutionMedium = input}
            placeholder="Gradution Medium" /><br />
          <h1 className="">Post Gradution Details</h1>
          <input required type="text" ref={(input) => this.getPGDegree = input}
            placeholder="Post Gradution Degree" /><br />
          <input required type="text" ref={(input) => this.getPGSchool = input}
            placeholder="Post Gradution College Name" /><br />
          <input required type="text" ref={(input) => this.getPGStream = input}
            placeholder="Post Gradution  Stream" /><br />
          <input required type="text" ref={(input) => this.getPGYOP = input}
            placeholder="Post Gradution  Year of passing" /><br />
          <input required type="text" ref={(input) => this.getPGMedium = input}
            placeholder="Post Gradution  Medium" /><br />
          <h1 className="">Employement Details</h1>
          <input required type="text" ref={(input) => this.getOrganization = input}
            placeholder="Name of Organization" /><br />
          <input required type="text" ref={(input) => this.getDesignation = input}
            placeholder="Designation" /><br />
          <input required type="text" ref={(input) => this.getDuration = input}
            placeholder="Durataion (In Months)" /><br />
          <h1 className="">How did you know about this</h1>
          <div className="inputGroup">
            <div className="inputGroup__item"><input type="checkbox" name="friends" value="Friends" ref={(input) => this.getCHKFriend = input} />Friends </div>
            <div className="inputGroup__item"><input type="checkbox" name="news" value="NewPaper" ref={(input) => this.getCHKNewsPaper = input} />News Paper </div>
            <div className="inputGroup__item"><input type="checkbox" name="website" value="Website" ref={(input) => this.getCHKWebsite = input} />Friends </div>

            <div className="inputGroup__item"><input type="checkbox" name="justdail" value="JustDail" ref={(input) => this.getCHKJustDail = input} />Just Dail </div>
            <div className="inputGroup__item"><input type="checkbox" name="other" value="Other" ref={(input) => this.getCHKOther = input} />Other </div>
            <div className="inputGroup__item"><input type="checkbox" name="sulekha" value="Sulekha" ref={(input) => this.getCHKSulekha = input} />Sulekha </div>
          </div>
          <button>Post</button>
        </form>
      </div>
    );
  }
}

export default App;
