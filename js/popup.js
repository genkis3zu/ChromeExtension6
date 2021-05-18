document.addEventListener('DOMContentLoaded', function() {
    restore_memo();
    document.querySelector('#save_button').addEventListener('click', saveButtonClicked);
});

function restore_memo() {
    const loaded_memo = localStorage.getItem('memo');

    if (loaded_memo) {
        document.querySelector('#memo_textarea_id').value = loaded_memo;
    }
}

function saveButtonClicked() {
    const save_memo = document.querySelector('#memo_textarea_id').value;

    localStorage.setItem('memo', save_memo);
}