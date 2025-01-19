import React from 'react';
import "../styles/Forms.css";
import { useNavigate } from 'react-router-dom'; 

function Forms() {

  const navigate = useNavigate(); // Initialize useNavigate

  const handleCreateNewForm = () => {
    navigate('/Createform'); // Replace '/create-form' with the path of your target webpage
  };
  return (
    <div className="forms-container">
      <header className="forms-header">
        <h1 className='mainhead'>Forms</h1>
        
      </header>
      <hr className='xyz' />
      <section className="new-forms">
      <br /><br />
        <div className="form-templates">
        <div className="form-cards" >
            <img src="pluss.png" alt="Blank Form Icon" className="form-icon" />
            <button className='cretebuton'onClick={handleCreateNewForm}>Create New Form</button>
           </div> 
          <div className="form-card">
            <img src="lectures.jpg" alt="Blank Form Icon" className="form-icon" />
            <p>Lecturer Reviews</p>
          </div>
          <div className="form-card">
            <img src="env.jpg" alt="Blank Form Icon" className="form-icons" />
            <p>Learning Environment</p>
          </div>
          <div className="form-card">
            <img src="support.jpg" alt="Blank Form Icon" className="form-icons" />
            <p>Support Services</p>
          </div>
          <div className="form-card">
            <img src="methids.jpg" alt="Blank Form Icon" className="form-icons" />
            <p>Teaching Methods</p>
          </div>
        </div>
      </section>
      <hr className='abc' />

      <section className="recent-forms">
        <h2>Recent forms</h2>
        <div className="form-templates">
          <div className="form-card-recent">
            <div className="form-icon recent-form">
              <img src="cinec.jpg" alt="Event Icon" className="recent-form-img" />
              <img src="formsicon.webp" alt="Hovered Event Icon" className="recent-form-hover-img" />
            </div>
            <p>CINEC CSSQ Form  FI12038</p>
            <span>01.12.2024</span>
            <hr />
            <br />
            <p className='ppp'>204 Submissions</p>
          </div>
          <div className="form-card-recent">
            <div className="form-icon recent-form">
              <img src="cinec.jpg" alt="Event Icon" className="recent-form-img" />
              <img src="formsicon.webp" alt="Hovered Event Icon" className="recent-form-hover-img" />
            </div>
            <p>CINEC CSSQ Form  FI10158</p>
            <span>01.10.2024</span>
            <hr />
            <br />
            <p className='ppp'>144 Submissions</p>
          </div>

          <div className="form-card-recent">
            <div className="form-icon recent-form">
              <img src="cinec.jpg" alt="Event Icon" className="recent-form-img" />
              <img src="formsicon.webp" alt="Hovered Event Icon" className="recent-form-hover-img" />
            </div>
            <p>CINEC CSSQ Form  FI09188</p>
            <span>01.09.2024</span>
            <hr />
            <br />
            <p className='ppp'>180 Submissions</p>
          </div>
          <div className="form-card-recent">
            <div className="form-icon recent-form">
              <img src="cinec.jpg" alt="Event Icon" className="recent-form-img" />
              <img src="formsicon.webp" alt="Hovered Event Icon" className="recent-form-hover-img" />
            </div>
            <p>CINEC CSSQ Form  FI081833</p>
            <span>01.08.2024</span>
            <hr />
            <br />
            <p className='ppp'>111 Submissions</p>
          </div>
       
        <div className="form-card-recent">
            <div className="form-icon recent-form">
              <img src="cinec.jpg" alt="Event Icon" className="recent-form-img" />
              <img src="formsicon.webp" alt="Hovered Event Icon" className="recent-form-hover-img" />
            </div>
            <p>CINEC CSSQ Form  FI081833</p>
            <span>01.08.2024</span>
            <hr />
            <br />
            <p className='ppp'>111 Submissions</p>
          </div>

          <button className='view-all-button'><b>View All</b></button>
      </div>
        
      </section>
    </div>
  );
}

export default Forms;
