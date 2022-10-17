export const initialState = {
  active: {
    data: [],
    stale: true,
  },
  archive: {
    data: [],
    stale: true,
  },
};

export const NotesReducer = (state, action) => {
  switch (action.type) {
    // After Get Note Fetch
    case 'UPDATE_ACTIVE_NOTES':
      return {
        ...state,
        active: {
          data: action.payload,
          stale: false,
        },
      };

    // After Add Note Fetch
    case 'STALE_ACTIVE_NOTES':
      return {
        ...state,
        active: {
          ...state['active'],
          stale: true,
        },
      };

    // After Get Note Fetch
    case 'UPDATE_ARCHIVE_NOTES':
      return {
        ...state,
        archive: {
          data: action.payload,
          stale: false,
        },
      };

    // After Add Note Fetch
    case 'STALE_ARCHIVE_NOTES':
      return {
        ...state,
        archive: {
          ...state['archive'],
          stale: true,
        },
      };

    // Move into Archive Notes
    case 'MOVE_INTO_ARCHIVE_NOTE':
      return {
        active: {
          ...state['active'],
          data: state.active.data.filter((note) => note.id !== action.payload),
        },
        archive: {
          ...state['archive'],
          stale: true,
        },
      };

    // Move into Active Notes
    case 'MOVE_INTO_ACTIVE_NOTE':
      return {
        active: {
          ...state['active'],
          stale: true,
        },
        archive: {
          ...state['archive'],
          data: state.archive.data.filter((note) => note.id !== action.payload),
        },
      };

    // Delete Active Note
    case 'DELETE_ACTIVE_NOTE':
      return {
        ...state,
        active: {
          ...state['active'],
          data: state.active.data.filter((note) => note.id !== action.payload),
        },
      };

    // Delete Archive Note
    case 'DELETE_ARCHIVE_NOTE':
      return {
        ...state,
        archive: {
          ...state['archive'],
          data: state.archive.data.filter((note) => note.id !== action.payload),
        },
      };

    //   Logout and Reset State
    case 'RESET':
      return initialState;

    // Default
    default:
      return state;
  }
};
