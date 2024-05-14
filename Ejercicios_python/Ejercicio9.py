# Realizar un algoritmo para determinar cuánto ahorrará una persona en un año, si al final de cada
# mes deposita cantidades variables de dinero; además, se quiere saber cuánto lleva ahorrado cada
# mes.

ahorros_cada_mes = {}
ahorros_acumulado = 0

for mes in range(1, 13):
    deposito = float(input(f"Ingrese la cantidad depositada al final del mes {mes}: "))
    ahorros_acumulado += deposito
    ahorros_cada_mes[f"Mes {mes}"] = ahorros_acumulado
    print(f"Total ahorrado en el mes {mes}: {ahorros_acumulado}")


print("Ahorros por mes:")
for mes, ahorro in ahorros_cada_mes.items():
    print(f"{mes}: {ahorro}")
    