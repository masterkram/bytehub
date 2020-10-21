<template>
    <form
    id="notes"
    @submit="checkForm"
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
        placeholder="Write something..."
        v-model="notes"
        ></textarea>
    </p>

    <p>
        <button type="submit">Send</button>
        <span id="success-msg"></span>
    </p>

    </form>
</template>

<script>
  export default {
    data: () => ({
        errors: [],
        author: "",
        notes: null,
        classId: null
    }),
    methods:{
        checkForm: function (e) {
            this.errors = [];

            if (!this.notes) {
                this.errors.push('Notes required.');
            } else if (this.notes.length <= 100) {
                this.errors.push('Please enter at least 100 characters.')
            }
            if (!this.classId) {
                this.errors.push('Class required');
            }

            if (this.errors.length === 0) {
                this.$refs['success-msg'].textContent = `✔ Submited! Thank you ${this.author}`;
                console.log("safadsfd");
                e.preventDefault();
                return true;
            }

            e.preventDefault();
        }
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