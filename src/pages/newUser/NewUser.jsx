import "./newUser.css";
import { Link } from "react-router-dom";
import { Component } from "react";
import axios from 'axios';
import { Redirect } from 'react-router';

class NewUser extends Component {
    constructor(props){
      super(props)
      this.state={
        ProductName: "",
        CASNumber: "",
        Brand: "",
        CatalogueNumber: "",
        PackSize: "",
        OrderQuantity: "",
        ImportanceType:"",
        ProductType:"",
        VendorName:"",
        AddComments:"",
        Status: "",
        redirect:false
      }
this.handleProductNameChange = this.handleProductNameChange.bind(this);
this.handleCASNumberChange = this.handleCASNumberChange.bind(this);
this.handleBrandChange = this.handleBrandChange.bind(this);
this.handleCatalogueNumberChange =this.handleCatalogueNumberChange.bind(this);
this.handlePackSizeChange =this.handlePackSizeChange.bind(this);
this.handleOrderQuantityChange =this.handleOrderQuantityChange.bind(this);
this.handleImportanceTypeChange =this.handleImportanceTypeChange.bind(this);
this.handleProductTypeChange = this.handleProductTypeChange.bind(this);
this.handleVendorNameChange = this.handleVendorNameChange.bind(this);
this.handleAddCommentsChange = this.handleAddCommentsChange.bind(this);
this.handleStatusChange = this.handleStatusChange.bind(this);
this.addCreate = this.addCreate.bind(this);
    }
    handleProductNameChange (e) {
      this.setState({ProductName: e.target.value});
    }
    handleCASNumberChange (e) {
      this.setState({CASNumber: e.target.value});
    }
    handleBrandChange(e) {
      this.setState({Brand: e.target.value})
    }
   handleCatalogueNumberChange (e) {
     this.setState({CatalogueNumber: e.target.value})
   }
   handlePackSizeChange (e){
     this.setState({PackSize: e.target.value});
   }
   handleOrderQuantityChange (e){
     this.setState({OrderQuantity: e.target.value});
   }
   handleImportanceTypeChange (e) {
     this.setState({ImportanceType: e.target.value});
   }
   handleProductTypeChange (e) {
     this.setState({ProductType: e.target.value});
   }
   handleVendorNameChange (e) {
     this.setState({VendorName: e.target.value});
   }
   handleAddCommentsChange (e) {
     this.setState({AddComments: e.target.value});
   }
   handleStatusChange (e) {
     this.setState({Status: e.target.value});
   }
    addCreate(event) {
      event.preventDefault();
      const orderAdd = {
          ProductName: this.state.ProductName,
          CASNumber:this.state.CASNumber,
          Brand: this.state.Brand,
          CatalogueNumber: this.state.CatalogueNumber,
          PackSize: this.state.PackSize,
          OrderQuantity: this.state.OrderQuantity,
          ImportanceType: this.state.ImportanceType,   
          ProductType: this.state.ProductType ,
          VendorName:this.state.VendorName,    
          AddComments:this.state.AddComments,
          Status:this.state.Status
      }
      console.log(orderAdd)
      axios.post('http://localhost:9000/api/order', orderAdd)
      .then(res => { 
          console.log(res);
          this.setState({ redirect: this.state.redirect === false });
      })
      .catch(err => { console.log(err) });
    }
   
  render(){
  return (
    
    <div className="newUser">
      <div className="userShow">
      <h1 className="newUserTitle">Create Order</h1>
      <form  onSubmit={this.addCreate} method="post" className="newUserForm">
        <div className="newUserItem">
          <label>Order Created By</label>
          <input type="text" placeholder="" />
        </div>
        <div className="newUserItem">
          <label>Employee ID</label>
          <input type="text" placeholder="" />
        </div>
        <div className="newUserItem">
          <label>Department</label>
          <input type="text" placeholder="" />
        </div>
        <div className="newUserItem">
          <label>Product Name</label>
          <input type="text" name="ProductName" onChange={this.handleProductNameChange} value={this.state.ProductName} placeholder="ProductName" />
        </div>
        <div className="newUserItem">
          <label>CAS Number</label>
          <input type="text" name="CASNumber" onChange={this.handleCASNumberChange} value={this.state.CASNumber} placeholder="CASNumber"/>
        </div>
        <div className="newUserItem">
          <label>Brand</label>
          <input type="text" name="Brand" onChange={this.handleBrandChange} value={this.state.Brand} placeholder="Brand" />
        </div>
        <div className="newUserItem">
          <label>Catalogue Number</label>
          <input type="text" name="CatalogueNumber" onChange={this.handleCatalogueNumberChange} value={this.state.CatalogueNumber} placeholder="CatalogueNumber" />
        </div>
        <div className="newUserItem">
          <label>Pack Size</label>
          <input type="text" name="PackSize" onChange={this.handlePackSizeChange} value={this.state.PackSize} placeholder="PackSize" />
        </div>
        <div className="newUserItem">
          <label>Order Quantity</label>
          <input type="text" name="OrderQuantity" onChange={this.handleOrderQuantityChange} value={this.state.OrderQuantity} placeholder="OrderQuantity" />
        </div>
        <div className="newUserItem">
          <label>Importance Type</label>{/* <input type="text" name="ImportanceType" onChange={this.handleImportanceTypeChange} value={this.state.ImportanceType} placeholder="A/B/C" /> */}
          <select className="newUserSelect" name="ImportanceType" id="active" onChange={this.handleImportanceTypeChange} value={this.state.ImportanceType}>
            <option>Type</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
            
        </div>
        <div className="newUserItem">
          <label>Product Type</label>
          <input type="text" name="ProductType" onChange={this.handleProductTypeChange} value={this.state.ProductType}  placeholder="ProductType" />
        </div>
        <div className="newUserItem">
          <label>Vendor Name</label>
          <input type="text" name="VendorName" onChange={this.handleVendorNameChange}  value={this.state.VendorName} placeholder="VendorName" />
        </div>
        <div className="newUserItem">
          <label>Add Comments</label>
          <input type="text" name="AddComments" onChange={this.handleAddCommentsChange} value={this.state.AddComments} placeholder="AddComments" />
        </div><br/>

        
        <div className="newUserItem">
          <label>Status</label>
          <select className="newUserSelect" name="Status" onChange={this.handleStatusChange} value={this.state.Status}  id="active">
            <option hidden value="Pending">Pending</option>
            <option hidden value="Saved">Saved</option>
            <option hidden value="Reject">Reject</option>
            <option hidden value="Active">Active</option>
          </select>
        </div>
        <div className="newUserItem1">
        <button  type ="submit" className="newUserButton">Create</button>
        </div>
      
        <div className="newUserItem2">
        <Link to="#">
          <button className="newUserButton">Save Order</button>      
        </Link>
        </div>
      </form>
      {this.state.redirect && (<Redirect to={'/users'}/>)}

    </div>
    </div>
  );
      }
}
export default NewUser;
