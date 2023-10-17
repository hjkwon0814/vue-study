<template>
  <div class="inputBox">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <!-- <button v-on:click="addTodo">add</button> -->
    <span class="addContainer" v-on:click="addTodo">
        <i class="fas fa-plus"></i>
    </span>
    <AlertModal v-if="showModal" @close="showModal = false">
        <template v-slot:header>
            <h3>
                경고!
                <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
            </h3>
        </template>
        <template v-slot:body>
            <h3>할 일을 입력하세요.</h3>
        </template>
        <template v-slot:footer>
            <h3>copy right</h3>
        </template>
    </AlertModal>
  </div>
</template>

<script>
    
import AlertModal from "./common/AlertModal.vue";

export default {

    data : function() {
        return {
            newTodoItem : "",
            showModal : false,
        }
    },
    methods : {
        addTodo : function() {
            if(this.newTodoItem !== '') {
                // this.$emit('addTodoItem', this.newTodoItem);
                this.$store.commit('addOneItem', this.newTodoItem);
                this.clearInput();
            }else {
                this.showModal = !this.showModal;
            }
        },
        clearInput : function() {
            this.newTodoItem = "";
        }
    },
    components : {
        AlertModal
    }
}
</script>

<style scoped>
    input:focus {
        outline : none;
    }

    .inputBox {
        background : white;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
    }
    .inputBox input {
        border-style : none;
        font-size: 0.9rem;
    }
    .addContainer {
        float : right;
        background: linear-gradient(to right, #6478FB, #8763FB);
        display : block;
        width : 3rem;
        border-radius : 0 5px 5px 0;
    }
    .addBtn {
        color : white;
        vertical-align : middle;
    }
    .closeModalBtn {
        color : #42b983;
    }
</style>