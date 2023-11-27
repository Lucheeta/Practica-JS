try:
    a = int(input("Coloca un úmero natural: "))
    b = int(input("Coloca otr úmero natural: "))
    print(f"El numero es {a/b}")
except Exception as e:
    print("Ha ocurrido un error =>")
    print(e)