import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  organizations: [],
  organizationDashboard: {
    activeServices:{

    },
    totalOrganizations:{

    },
    totalEarnings:{

    },
    newOrganizations:{

    }
  },
  oneOrganization:[],
  organization: null
};

export const counterSlice = createSlice({
  name: 'organizations',
  initialState,
  reducers: {
    setOrganizations: (state, action) => {
      state.organizations = action.payload;
    },
    setOrganizationDashboard: (state, action) => {
      state.organizationDashboard = action.payload;
    },
    deleteOrganization: (state, action) => {
      state.oneOrganization = action.payload;
    }
  },
});

export const {  
    setOrganizations,
    setOrganizationDashboard,
    deleteOrganization,
} = counterSlice.actions;


export default counterSlice.reducer;
