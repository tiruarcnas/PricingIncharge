import React ,{Component}from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import axios from 'axios';
class ViewProfile extends Component {
    constructor(props){
        super(props)
        this.state={
            view:[]

        }
      axios.get("http")
    }
render(){

  return (
    <div>
      <Container>
        {' '}
        <h1>View</h1>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          <ListItem alignItems="flex-start">
            <h3>First Name :</h3>
          </ListItem>

          <ListItem alignItems="flex-start">
            <h3>Last Name :</h3>
          </ListItem>

          <ListItem alignItems="flex-start">
            <h3>Employement ID :</h3>
          </ListItem>

          <ListItem alignItems="flex-start">
            <h3>Designation :</h3>
          </ListItem>

          <ListItem alignItems="flex-start">
            <h3>Email :</h3>
          </ListItem>

          <ListItem alignItems="flex-start">
            <h3>Phone Number :</h3>
          </ListItem>

          <ListItem alignItems="flex-start">
            <h3>Reporting To :</h3>
          </ListItem>

          <ListItem alignItems="flex-start">
            <h3>Wing :</h3>
          </ListItem>

          <ListItem alignItems="flex-start">
            <h3>HQ Location :</h3>
          </ListItem>

          <ListItem alignItems="flex-start">
            <h3>HQ Address :</h3>
          </ListItem>

          <ListItem alignItems="flex-start">
            <h3>Blood Group :</h3>
          </ListItem>
        </List>
      </Container>
    </div>
  );
}
}

export default ViewProfile;
