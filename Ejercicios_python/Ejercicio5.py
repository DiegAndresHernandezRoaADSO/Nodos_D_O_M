# Crear un programa en Python donde se le pregunte al usuario su nombre su edad y su numero de
# # documento, todo esto deberá estar almacenado en un diccionario.




nombre = input("cual es tu nombre")
edad = input("cual es tu edad")
num_document = input("cual es tu numero de docuento")


diccionario = { "Nombre": nombre, 
               "Edad": edad,
              "num_document": num_document
}
print(diccionario["Nombre"] + " tiene " + diccionario["Edad"] + "años, y su numero de documento es" +  diccionario["num_document"])


