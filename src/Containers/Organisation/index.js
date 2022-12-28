import * as React from 'react';
import Stats from '../../Components/Stats.js'
import OrgTable from '../../Components/Organisation/OrgTable.js'
import Layout from "../../Components/Layout";


export default function Organisation() {
  return (
    <Layout>
      <Stats/>
      <OrgTable/>
    </Layout>
  )
}


