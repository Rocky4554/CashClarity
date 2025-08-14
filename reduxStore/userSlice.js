// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   id: '',
//   clerkUserId: '',
//   email: '',
//   name: '',
//   imageUrl: '',
//   isPro: false,
//   transactionCount: 0,
//   createdAt: '',
//   updatedAt: '',
//   actualCount: 0,
//   proUser: false,
// };

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     setUserInfo: (state, action) => {
//       const userData = action.payload;
//       state.id = userData.id || '';
//       state.clerkUserId = userData.clerkUserId || '';
//       state.email = userData.email || '';
//       state.name = userData.name || '';
//       state.imageUrl = userData.imageUrl || '';
//       state.isPro = userData.isPro || false;
//       state.transactionCount = userData.transactionCount || 0;
//       state.createdAt = userData.createdAt || '';
//       state.updatedAt = userData.updatedAt || '';
//       state.proUser = userData.isPro || false;
//     },
//     updateActualCount: (state, action) => {
//       state.actualCount = action.payload;
//     },
//     updateProUser: (state, action) => {
//       state.isPro = action.payload;
//       state.proUser = action.payload;
//     },
//     updateTransactionCount: (state, action) => {
//       state.transactionCount = action.payload;
//     },
//     clearUser: (state) => {
//       return initialState;
//     },
//   },
// });

// export const { 
//   setUserInfo, 
//   updateActualCount, 
//   updateProUser, 
//   updateTransactionCount,
//   clearUser 
// } = userSlice.actions;

// export default userSlice.reducer;


/// experiment 

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAccounts } from "@/actions/dashboard";
import {getUserInfo} from "@/actions/user";

// Helper function to serialize data before returning from thunk
const serializeUserData = (data) => {
  if (!data) return data;
  
  return {
    ...data,
    createdAt: data.createdAt ? (data.createdAt instanceof Date ? data.createdAt.toISOString() : String(data.createdAt)) : '',
    updatedAt: data.updatedAt ? (data.updatedAt instanceof Date ? data.updatedAt.toISOString() : String(data.updatedAt)) : '',
    // Handle any other potential date fields
    stats: data.stats ? {
      ...data.stats,
      // Add any date serialization for stats if needed
    } : null,
  };
};

// Async thunks for server calls
export const getUserDetails = createAsyncThunk(
  'user/getUserDetails',
  async (options = {}, { rejectWithValue }) => {
    try {
      const response = await getUserInfo(options);
      
      if (!response.success) {
        throw new Error(response.error || 'Failed to fetch user info');
      }
      
      // Serialize the data before returning
      return serializeUserData(response.data);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// in reduxStore/userSlice.js
// export const getUserDetails = createAsyncThunk(
//   'user/getUserDetails',
//   async (options = {}, { rejectWithValue }) => {
//     try {
//       const res = await fetch('/api/getUserRefreshInfo');
//       const data = await res.json();

//       if (!data.success) {
//         throw new Error(data.error || 'Failed to fetch user info');
//       }

//       return serializeUserData(data.data);
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );


export const getAccountDetails = createAsyncThunk(
  'user/getAccountDetails',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getUserAccounts();
      
      if (!Array.isArray(response)) {
        throw new Error(response.error || 'Failed to fetch account info');
      }
      
      // Serialize account data if it contains dates
      const serializedAccounts = response?.map(account => ({
        ...account,
        createdAt: account.createdAt ? (account.createdAt instanceof Date ? account.createdAt.toISOString() : String(account.createdAt)) : '',
        updatedAt: account.updatedAt ? (account.updatedAt instanceof Date ? account.updatedAt.toISOString() : String(account.updatedAt)) : '',
      })) || [];
      
      return serializedAccounts;
      
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Helper function to safely convert dates to strings
const toDateString = (date) => {
  if (!date) return '';
  if (typeof date === 'string') return date;
  if (date instanceof Date) return date.toISOString();
  return String(date);
};

const initialState = {
  id: '',
  clerkUserId: '',
  email: '',
  name: '',
  imageUrl: '',
  isPro: false,
  transactionCount: 0,
  createdAt: '',
  updatedAt: '',
  actualCount: 0,
  proUser: false,
  accounts: [],
  stats: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      const userData = action.payload;
      // Serialize the data when setting user info manually
      const serializedData = serializeUserData(userData);
      
      state.id = serializedData.id || '';
      state.clerkUserId = serializedData.clerkUserId || '';
      state.email = serializedData.email || '';
      state.name = serializedData.name || '';
      state.imageUrl = serializedData.imageUrl || '';
      state.isPro = serializedData.isPro || false;
      state.transactionCount = serializedData.transactionCount || 0;
      state.createdAt = serializedData.createdAt || '';
      state.updatedAt = serializedData.updatedAt || '';
      state.proUser = serializedData.isPro || false;
    },
    updateActualCount: (state, action) => {
      state.actualCount = action.payload;
    },
    updateProUser: (state, action) => {
      state.isPro = action.payload;
      state.proUser = action.payload;
    },
    updateTransactionCount: (state, action) => {
      state.transactionCount = action.payload;
    },
    clearUser: (state) => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      // getUserDetails cases
      .addCase(getUserDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserDetails.fulfilled, (state, action) => {
        state.loading = false;
        const userData = action.payload; // Already serialized in the thunk
        state.id = userData.id || '';
        state.clerkUserId = userData.clerkUserId || '';
        state.email = userData.email || '';
        state.name = userData.name || '';
        state.imageUrl = userData.imageUrl || '';
        state.isPro = userData.isPro || false;
        state.transactionCount = userData.transactionCount || 0;
        state.createdAt = userData.createdAt || '';
        state.updatedAt = userData.updatedAt || '';
        state.proUser = userData.isPro || false;
        state.stats = userData.stats || null;
      })
      .addCase(getUserDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // getAccountDetails cases
      .addCase(getAccountDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAccountDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.accounts = action.payload || [];
      })
      .addCase(getAccountDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  setUserInfo,
  updateActualCount,
  updateProUser,
  updateTransactionCount,
  clearUser,
} = userSlice.actions;

export default userSlice.reducer;