export function deleteNote(id) {
    return {
      type: '@notes/DELETE_NOTE',
      payload: { id },
    }
  }
  
export function createNoteRequest(slug, data) {
    return {
        type: '@notes/CREATE_NOTE_REQUEST',
        payload: { slug, data },
    }
}

export function loadNotesSuccess(data) {
    return {
        type: '@notes/LOAD_NOTES_SUCCESS',
        payload: { data },
    }
}

export function requestLoadNotes() {
    return {
        type: '@notes/REQUEST_LOAD_NOTES',
    }
}

export function successDelete() {
    return {
        type: '@notes/SUCCESS_DELETE',
    }
}

export function successCreate() {
    return {
        type: '@notes/CREATE_NOTE_SUCCESS',
    }
}
