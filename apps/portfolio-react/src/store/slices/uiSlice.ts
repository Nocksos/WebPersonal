import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UIState {
  isMobileMenuOpen: boolean
  activeSection: string
}

const initialState: UIState = {
  isMobileMenuOpen: false,
  activeSection: 'hero',
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setMobileMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isMobileMenuOpen = action.payload
    },
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen
    },
    setActiveSection: (state, action: PayloadAction<string>) => {
      state.activeSection = action.payload
    },
  },
})

export const { setMobileMenuOpen, toggleMobileMenu, setActiveSection } = uiSlice.actions

export default uiSlice.reducer
