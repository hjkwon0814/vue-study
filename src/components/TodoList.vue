<template>
  <div>
    <TransitionGroup name="list" tag="ul">
        <li v-for="(todoItem, index) in this.$store.state.todoItems" v-bind:key="todoItem">
            <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted : todoItem.completed}" v-on:click="toggleComplete(todoItem, index)"></i>
            <span v-bind:class="{textCompleted : todoItem.completed}">{{ todoItem.item }}</span>
            <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
                <i class="fa-solid fa-trash"></i>
            </span>
        </li>
    </TransitionGroup>
  </div>
</template>

<script>
export default {
    methods : {
        removeTodo : function(todoItem, index) {
            this.$store.commit('removeOneItem', {todoItem, index});
        },
        toggleComplete : function(todoItem, index) {
            this.$store.commit('toggleOneItem', {todoItem, index})
        }
    }
}
</script>

<style>
    ul {
        list-style-type : none;
        padding-left : 0px;
        margin-top : 0;
        text-align: left;
    }
    li {
        display : flex;
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin: 0.5rem 0;
        padding : 0 0.9rem;
        background: white;
        border-radius: 5px;
    }
    .checkBtn {
        line-height: 45px;
        color: #62acde;
        margin-right: 5px;
    }
    .textCompleted {
        text-decoration: line-through;
        color: #b3adad;
    }
    .checkBtnCompleted {
        color: #b3adad;
    }
    .removeBtn {
        margin-left: auto;
        color: #de4343;
    }
    .list-enter-active,
    .list-leave-active {
        transition: all 0.5s ease;
    }
    .list-enter-from,
    .list-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }
</style>