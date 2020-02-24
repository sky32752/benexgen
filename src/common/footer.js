import React from "react";
import { Box } from "@material-ui/core";
const Footer = ({ details: { company, email, call, address } }) => (
  <Box style={{ display: "flex", flex: 1 }}>
    <footer className='pt-5 text-white text-center bg-dark container-fluid'>
      <div className='row'>
        <p className='font-16 col-md-4'>
          <i className='mr-3 fa fa-copyright'></i> {company}{" "}
          {new Date().getFullYear()} All Rights Reserved ®
        </p>
        <div className='col-md-4'>
          <p className='font-16'>
            <i className='mr-3 fa fa-envelope'></i>
            {email}
          </p>
          <p className='font-16'>
            <i className='mr-3 fa fa-mobile'></i>
            {call}
          </p>
        </div>
        <p className='font-16 col-md-4'>
          <i className='mr-3 fa fa-map-marker-alt'></i>
          {address}
        </p>
      </div>
    </footer>
  </Box>
);

export { Footer };
