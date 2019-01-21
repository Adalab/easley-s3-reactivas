import React, { Component } from "react";
import CardGenerator from "./CardGenerator";

const defaultData = {
  pallete: "1",
  typography: "2",
  name: "",
  job: "",
  photo: "",
  email: "",
  phone: "",
  linkedin: "",
  github: "",
  skills: ["HTML", "CSS", "Gulp"],
  success: "",
  cardURL: "",
  error: ""}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCard: this.getSavedData(),
      backSkills: [""]
    };
    
    this.getBackSkills();
    this.changePallete = this.changePallete.bind(this);
    this.changeTypography = this.changeTypography.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeJob = this.changeJob.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePhone = this.changePhone.bind(this);
    this.changeLinkedin = this.changeLinkedin.bind(this);
    this.changeGithub = this.changeGithub.bind(this);
    this.changeImage = this.changeImage.bind(this);
  }

  getSavedData(){
    const storageData = localStorage.getItem('storageData');
    console.log(storageData)
    if (!storageData){
      return JSON.parse(storageData);
    } else {
      return {...defaultData};
    }
  }

  saveData(data){
    localStorage.setItem('storageData', JSON.stringify(data))
  }

  getBackSkills() {
    fetch(
      "https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json"
    )
      .then(response => response.json())
      .then(data => this.setState({ backSkills: data.skills }));
  }

  changePallete(e) {
    const valuePalette = e.target.value;

    this.setState(prevState => ({
      dataCard: {
        ...prevState.dataCard,
        pallete: valuePalette
      }
    }));
  }

  changeTypography(e) {
    const valuetypography = e.target.value;

    this.setState(prevState => ({
      dataCard: {
        ...prevState.dataCard,
        typography: valuetypography
      }
    }));
  }


  changeName(e) {
    const valuename = e.target.value;

    this.setState(prevState => {
      const updatedName = {
        ...prevState.dataCard,
        name: valuename
      };
      this.saveData(updatedName);
      return {
        dataCard: updatedName
      }
      })
  }

  changeJob(e) {
    const valuejob = e.target.value;

    this.setState(prevState => ({
      dataCard: {
        ...prevState.dataCard,
        job: valuejob
      }
    }));
  }

  changeImage(image) {
    this.setState(prevState => ({
      dataCard: {
        ...prevState.dataCard,
        photo: image
      }
    }));
  }

  changeEmail(e) {
    const valueemail = e.target.value;

    this.setState(prevState => ({
      dataCard: {
        ...prevState.dataCard,
        email: valueemail
      }
    }));
  }

  changePhone(e) {
    const valuephone = e.target.value;

    this.setState(prevState => ({
      dataCard: {
        ...prevState.dataCard,
        phone: valuephone
      }
    }));
  }

  changeLinkedin(e) {
    const valuelinkedin = e.target.value;

    this.setState(prevState => ({
      dataCard: {
        ...prevState.dataCard,
        linkedin: valuelinkedin
      }
    }));
  }


  changeGithub(e) {
    const valuegithub = e.target.value;

    this.setState(prevState => ({
      dataCard: {
        ...prevState.dataCard,
        github: valuegithub
      }
    }));
  }

  render() {
    const changePalette = this.changePallete;
    const changeTypography = this.changeTypography;
    const changeName = this.changeName;
    const changeJob = this.changeJob;
    const changeEmail = this.changeEmail;
    const changePhone = this.changePhone;
    const changeLinkedin = this.changeLinkedin;
    const changeGithub = this.changeGithub;
    const changeImage = this.changeImage;
    return (
      <CardGenerator
        dataCard={this.state.dataCard}
        backSkills={this.state.backSkills}
        changePalette={changePalette}
        changeTypography={changeTypography}
        changeName={changeName}
        changeJob={changeJob}
        changeImage={changeImage}
        changeEmail={changeEmail}
        changePhone={changePhone}
        changeLinkedin={changeLinkedin}
        changeGithub={changeGithub}
      />
    );
  }
}

export default App;
