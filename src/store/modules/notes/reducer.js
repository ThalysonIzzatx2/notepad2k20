import produce from 'immer';

const INITIAL_STATE = {
  data: null,
  loading: false,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@notes/DELETE_NOTE': {
        draft.loading = true;
        break;
      }
      case '@notes/SUCCESS_DELETE': {
        draft.loading = true;
        break;
      }
      case '@notes/CREATE_NOTE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@notes/CREATE_NOTE_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@notes/REQUEST_LOAD_NOTES': {
        draft.loading = true;
        break;
      }
      case '@notes/LOAD_NOTES_SUCCESS': {
        draft.data = action.payload.data;
        draft.loading = false;
        break;
      }
      default:
        return state;
    }
  });
}