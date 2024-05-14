# Escribir un programa que pregunte al usuario su nombre, edad, dirección y teléfono y lo guarde en
# un diccionario. Después debe mostrar por pantalla el mensaje <nombre> tiene <edad> años, vive
# en <dirección> y su número de teléfono es <teléfono>.


Infor = {"Nombre" :"" , "Edad": "" , "Direccion": "", "telefono" : "" }

for i in infor:
  dato = str(input("¿cual es tu " + i +"?"))
  infor [i] = dato


print(Infor["Nombre"] + " Tiene " + Infor["Edad"] + " años, vive en " + Infor["Direccion"] + "y su numero de telefono es " + Infor["telefono"])

 


