# Realizar un algoritmo el cual pregunte el nombre de la persona y la edad, tener en cuenta que al
# momento de mostrar la edad en pantalla debe mostrar la fecha de nacimiento de dicha persona.



from datetime import datetime

nombre = input("¿Cuál es tu nombre? ")
edad = int(input("¿Cuántos años tienes? "))

# Calcular el año de nacimiento
año_actual = datetime.now().year
año_nacimiento = año_actual - edad

# Mostrar la información de la persona
print("\nInformación de la persona:")
print("Nombre:", nombre)
print("Edad:", edad)
print("Fecha de nacimiento:" , año_nacimiento)







