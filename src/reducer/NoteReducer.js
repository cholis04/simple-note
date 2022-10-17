export const initialState = {
  all: {
    data: [],
  },
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
    case 'ADD_NOTE':
      return {
        ...state,
        all: {
          ...state['all'],
          data: [...state['all'].data, action.payload],
        },
        active: {
          ...state['active'],
          stale: true,
        },
      };

    // Move into Archive Notes
    case 'ARCHIVE_NOTE':
      return {
        ...state,
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
    case 'ACTIVE_NOTE':
      return {
        ...state,
        active: {
          ...state['active'],
          stale: true,
        },
        archive: {
          ...state['archive'],
          data: state.archive.data.filter((note) => note.id !== action.payload),
        },
      };

    // Delete Archive Note
    case 'DELETE_NOTE':
      return {
        all: {
          ...state['data'],
          data: state.active.data.filter((note) => note.id !== action.payload),
        },
        active: {
          ...state['active'],
          data: state.active.data.filter((note) => note.id !== action.payload),
        },
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
