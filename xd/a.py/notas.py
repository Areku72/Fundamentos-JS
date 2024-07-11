cantidad_notas = int(input('Ingrese la cantidad de notas: '))
notas = [] 
nota_maxima = []
nota_minima = []

for i in range(cantidad_notas):
    notass = float(input(f'Ingrese una nota {i+1}: '))
    notas.append(notass)

nota_minima = notas[0]
nota_maxima = notas[0]

acumNotas = 0

for i in range(len(notas)):
    acumNotas += notas[i]

for i in range(len(notas)):
    if notas[i] < nota_minima :
        nota_minima = notas[i]

    elif notas[i] > nota_maxima:
        nota_maxima = notas[i] 

promedio = acumNotas / len(notas)

print(f'Promedio Notas: {promedio}')

print(f'La nota maxima es {nota_maxima} y la minima es {nota_minima}')

orden = input("¿Desea ordenar las notas? (ascendente/descendente): ").lower()
if orden == 'ascendente':
    notas.sort()
    print("Notas ordenadas de menor a mayor:", notas)
elif orden == 'descendente':
    notas.sort(reverse=True)
    print("Notas ordenadas de mayor a menor:", notas)
else:
    print("Opción no válida. No se ordenarán las notas.")