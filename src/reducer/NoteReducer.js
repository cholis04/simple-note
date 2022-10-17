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

    // After Move & Delete
    case 'ALTER_ACTIVE_NOTES':
      return {
        ...state,
        actve: {
          data: state.active.data.filter((note) => note.id !== action.id),
          stale: true,
        },
      };

    // After Move & Delete
    case 'ALTER_ARCHIVE_NOTES':
      return {
        ...state,
        archive: {
          data: state.archive.data.filter((note) => note.id !== action.id),
          stale: true,
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
