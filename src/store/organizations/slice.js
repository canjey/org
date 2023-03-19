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
  organization: null
};

export const counterSlice = createSlice({
  name: 'organizations',
  initialState,
  reducers: {
    setOrganizations: (state, action) => {
      state.organizations = action.payload;
    },
  },
});

export const {  
    setOrganizations 
} = counterSlice.actions;


export default counterSlice.reducer;
