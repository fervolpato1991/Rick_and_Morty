const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe("Test de RUTAS", () => {
    describe('GET /rickandmorty/character/:id', () => {
  
        //1° TEST:
        it('Responde con status: 200', async () => {
            await agent.get('/rickandmorty/character/1').expect(200);
        })
    
        //2° TEST:
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
            const response = await agent.get('/rickandmorty/character/1').expect(200);
            expect(response.body).toHaveProperty("id");
            expect(response.body).toHaveProperty("name");
            expect(response.body).toHaveProperty("species");
            expect(response.body).toHaveProperty("gender");
            expect(response.body).toHaveProperty("status");
            expect(response.body).toHaveProperty("origin");
            expect(response.body).toHaveProperty("image");
        });
    
        //3° TEST:
        it('Si hay un error responde con status: 500', async () => {
          const response =  await agent.get('/rickandmorty/character/1000alfa');
          expect(response.statusCode).toBe(500);
        })

    });

    describe("GET /rickandmorty/login", () =>{
        it("Responde con un objeto con la propiedad access en true si la Información del usuario es válida", async () =>{
            const response = await agent.get('/rickandmorty/login?email=usuario@gmail.com&password=pass123');
            const access = {access: true};
            expect(response.body).toEqual(access);
        });

        it("Responde con un objeto con la propiedad access en true si la Información del usuario no es válida", async () =>{
            const response = await agent.get('/rickandmorty/login?email=pepito@gmail.com&password=pass1233');
            access = {access: false};
            expect(response.body).toEqual(access);
        });
    });

    describe("POST /rickandmorty/fav", () => {
        it("Debe guardar el personaje en favoritos", async () => {
            const response = await agent.post('/rickandmorty/fav');
            send();
            expect(response.body).toContainEqual()
        });
        it("Debe agregar personajes a favoritos sin eliminar existentes", async () =>{
            const response = await agent.post('/rickandmorty/fav');
            send();
            expect(response.body.length).toBe()
        })
    })
    describe("DELETE /rickandmorty/fav/:id", () => {
        it("si el ID no existe, retornar un arreglo con los favoritos", async () => {
            const response = await agent.delete('/rickandmorty/fav/23');
            expect(response.body.length).toBe(23)
        })
        it("si el ID existe, debo eliminarlo de favoritos",async () => {
            const response = await agent.delete('/rickandmorty/fav/1223');
            expect(response.body.length).toBe(1)
        })
})
});

