import * as React from 'react';
import AboutPage from '../../Components/AboutOrganization/About.js';
import UserTable from '../../Components/AboutOrganization/Users/Users.js'
import Layout from "../../Components/Layout";


export default function OrganizationUsers() {
  return (
    <Layout>
      <AboutPage/>
      <UserTable/>
    </Layout>
  )
}


