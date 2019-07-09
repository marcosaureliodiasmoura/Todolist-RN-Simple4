import React from "react";

import { View, Text, Button } from "react-native";

import { connect } from "react-redux";

//Meu componente agora tem acesso as propriedade addTodo e markAsCompleted do meu mapDispatch
const TodoList = ({ todos, addTodo, markAsCompleted }) => (
  <View style={{ flex: 1, backgroundColor: "#FFF", justifyContent: "center" }}>
    {todos.map(todo => (
      <Text //Se o meu todo for completed true irei adicionar uma linha, senão farei nada
        onPress={() => markAsCompleted(todo.id)}
        style={{ textDecorationLine: todo.completed ? "line-through" : "none" }}
        key={todo.id}
      >
        {todo.text}
      </Text>
    ))}
    <Button
      onPress={addTodo} //chamo
      title="Adicionar todo"
      color="#c4c"
    />
  </View>
);

const mapStateToProps = state => ({
  todos: state
});

//será o nosso dispatch atual para disparar as ações
const mapDispatchToProps = dispatch => ({
  addTodo: () => dispatch({ type: "ADD_TODO", text: "Novo TODO" }),
  markAsCompleted: id => dispatch({ type: "MARK_AS_COMPLETED", id })
  //Preciso receber um id, porque não tenho mais a referencia do todo.id que eu tinha antes.
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
