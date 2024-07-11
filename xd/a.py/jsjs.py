cantidad_temperaturas = int(input('Ingrese la cantidad de temperaturas: '))
temperaturas = []

temperatura_minima = float('inf')
temperatura_maxima = float('-inf')

for i in range(cantidad_temperaturas):
    temperatura = float(input(f'Ingrese una temperatura {i+1}: '))
    temperaturas.append(temperatura)
    
    if temperatura < temperatura_minima:
        temperatura_minima = temperatura
    if temperatura > temperatura_maxima:
        temperatura_maxima = temperatura

temperatura_promedio = sum(temperaturas) / cantidad_temperaturas

print(f'Temperatura mínima: {temperatura_minima}')
print(f'Temperatura máxima: {temperatura_maxima}')
print(f'Temperatura promedio: {temperatura_promedio}')