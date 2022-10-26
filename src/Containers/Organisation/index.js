import * as React from 'react';
import Sidebar from '../../Components/Sidebar'
import Stats from '../../Components/Organisation/Stats.js'
import OrgTable from '../../Components/Organisation/OrgTable.js'

export default function Organisation() {
    return(
        <>
        <Sidebar />
        <Stats />
        <OrgTable />
        </>

    )
}


