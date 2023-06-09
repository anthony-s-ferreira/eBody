import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Students, Profile, NewProfileScreen, EditStudentScreen, NewEvaluation, MuscularGroups} from '../component/Index'

function StudentsStackScreen() {

    const StudentsStack = createNativeStackNavigator();
    
    return(
        <StudentsStack.Navigator>
            <StudentsStack.Screen 
                name="StudentsScreen" 
                component={Students}
                options={{
                    title:"Estudantes",
                    headerStyle:{backgroundColor: '#455d3b'},
                    headerTintColor:'white',
                    headerTitleStyle:{fontWeight:'bold'},
                    headerTitleAlign: 'center'
                }}
            />
            <StudentsStack.Screen 
                name="Profile" 
                component={Profile}
                options={({ route }) => ({ 
                    title: route.params.name,
                    headerStyle:{backgroundColor: '#455d3b'},
                    headerTintColor:'white',
                    headerTitleStyle:{fontWeight:'bold'},
                    headerTitleAlign: 'center'
                    })}/>
            <StudentsStack.Screen
                name="NewProfile"
                component={NewProfileScreen}
                options={{
                    title:"Novo perfil",
                    headerStyle:{backgroundColor: '#455d3b'},
                    headerTintColor:'white',
                    headerTitleStyle:{fontWeight:'bold'},
                    headerTitleAlign: 'center'
                }}
            />
            <StudentsStack.Screen
                name="EditProfile"
                component={EditStudentScreen}
                options={{
                    title:"Editar perfil",
                    headerStyle:{backgroundColor: '#455d3b'},
                    headerTintColor:'white',
                    headerTitleStyle:{fontWeight:'bold'},
                    headerTitleAlign: 'center'
                }}
            />
            <StudentsStack.Screen 
                name="NewEvaluation" 
                component={NewEvaluation}
                options={{
                    title:"Novas medidas",
                    headerStyle:{backgroundColor: '#455d3b'},
                    headerTintColor:'white',
                    headerTitleStyle:{fontWeight:'bold'},
                    headerTitleAlign: 'center'
                }}
            />
            <StudentsStack.Screen 
                name="MuscularGroups" 
                component={MuscularGroups}
                options={{
                    title:"Grupos musculares",
                    headerStyle:{backgroundColor: '#455d3b'},
                    headerTintColor:'white',
                    headerTitleStyle:{fontWeight:'bold'},
                    headerTitleAlign: 'center'
                }}
            />
            
        </StudentsStack.Navigator>
    );

}

export default StudentsStackScreen;