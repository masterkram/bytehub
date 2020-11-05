<template>
    <form
    id="notes"
    method="POST"
    data-netlify="true"
    >

    <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
        <li v-for="error in errors">{{ error }}</li>
        </ul>
    </p>

    <hr />

    <p>
        <label for="author">Author</label>
        <br />
        <input
        id="author"
        v-model="author"
        type="text"
        name="author"
        placeholder="Your name..."
        >
    </p>
        <p>
        <label for="classId">Class</label>
        <br />
        <input
        id="classId"
        v-model="classId"
        type="text"
        name="classId"
        >
    </p>

    <p>
        <label for="notes">Notes</label>
        <br/>
        <textarea
        id="notesTextArea"
        name="myNotes"
        placeholder="Write something..."
        v-model="notes"
        ></textarea>
    </p>

    <p>
        <button type="submit">Send</button>
    </p>

    </form>
</template>

<script>
  export default {
    data: () => ({
        errors: [],
        author: "",
        notes: "",
        classId: "",
    }),
    methods:{
    }
  }
</script>

<style>
    #notesTextArea {
        width: 100%;
        height: 16em;
        resize: vertical;
        padding: 12px 16px;
    }

    label {
        font-weight: bold;
    }

    input[type="text"] {
        padding: 4px 8px;
    }

    button {
        background-color: #282c34;
        border: none;
        color: white;
        padding: 8px 16px;
        text-decoration: none;
        margin: 4px 2px;
        cursor: pointer;
        font-weight: bold;
    }
</style>