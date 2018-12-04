import pymysql.cursors

connection = pymysql.connect(host='localhost',
                             user='tab',
                             password='passtab',
                             db='db',
                             charset='utf8mb4',
                             cursorclass=pymysql.cursors.DictCursor)

try:
    with connection.cursor() as cursor:
        # Create a new record
        sql = "INSERT INTO `users` (`email`, `password`) VALUES (%s, %s)"
        cursor.execute(sql, ('tabapp@gmail.com', 'very-secret'))

    connection.commit()

    with connection.cursor() as cursor:
        # Read a single record
        sql = "SELECT `id`, `password` FROM `users` WHERE `email`=%s"
        cursor.execute(sql, ('tabapp@gmail.com',))
        result = cursor.fetchone()
        print(result)
finally:
    connection.close()
