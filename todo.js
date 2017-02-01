var app = angular.module('TodoListApp', []);

app.controller('TodoCtrl', ['$scope', function($scope){

    $scope.todos = [
        {
            title : 'Entrevistarme con Valeria C.', 
            completed : true
        },
        {
            title : 'Entrevistarme con Gastón M.',
            completed : true
        },
        {
            title : 'Enviar ejercicio de AngularJS',
            completed : true
        },
        {
            title : 'Continuar aprendiendo AngularJS',
            completed : false
        },
        {
            title : 'Esperar respuesta de Valeria C.',
            completed : false
        },
        {
            title : 'Comenzar a trabajar en una empresa genial!',
            completed : false
        }
    ];

    $scope.newTodo ='';

    $scope.add = function(e){
        if ($scope.newTodo.length && e.which && e.which == 13){
            
            $scope.todos.push({title:$scope.newTodo, completed:false});
            
            $scope.newTodo = '';
        }
    }

    $scope.remove = function(todo){
        var finishedTodos = $scope.todos;
        $scope.todos = [];
        angular.forEach(finishedTodos, function(todo) {
            if (!todo.completed) $scope.todos.push(todo);
        });
    }

    $scope.done = function(todo){
        (todo.completed) ? todo.completed = false : todo.completed = true;
    }

}]);