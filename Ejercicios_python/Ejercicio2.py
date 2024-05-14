# Escribir un programa que guarde en un diccionario los precios de las frutas de la tabla, pregunte al
# usuario por una fruta, un número de kilos y muestre por pantalla el precio de ese número de kilos
# de fruta. Si la fruta no está en el diccionario debe mostrar un mensaje informando de ello.


frutas = {
  "platano": 1.35, 
  "manzana": 0.80, 
  "pera": 0.85, 
  "naranja": 0.70 
  }


fruta = input("¿que fruta deseas comprar ? \n" )
kilos = float(input("¿cuantos kilos deseas llevar? \n"))

if fruta in frutas:
  precio = frutas[fruta] * kilos
  print(f"el precio de la fruta es: {precio:.2f}" )
else:
  print("lo sentimos esta fruta no esta en el sistema")


