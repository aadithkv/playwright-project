import {test,expect} from "@playwright/test";
import { addAbortListener } from "node:events";
import { request } from "node:http";


test('GET request-fetch user',async({request})=>{
    const response=await request.get('https://jsonplaceholder.typicode.com/users')
    expect(response.ok()).toBeTruthy()
    const body=await response.json()
    expect(body.length).toBeGreaterThan(0)

})

test('Post request',async({request})=>{
     const response=await request.post('https://jsonplaceholder.typicode.com/users',
        {
            data:{
                name:'add',
                email:'ascadf@getMaxListeners.com',
            }
            
        }
     )
     expect(response.status()).toBe(201)
     const responseBody=await response.json()
     console.log(responseBody)
     expect(responseBody.name).toBe('add')

})

test('Patch request update user',async({request})=>{
    const response=await request.patch('https://jsonplaceholder.typicode.com/users/1',
        {
            data:{
                
                email:'ascadf@gmail.com',
            }

        }
    )
    expect(response.status()).toBe(200)
    const responseBody=await response.json()
    console.log(responseBody)
    expect(responseBody.email).toBe('ascadf@gmail.com')
            
})

test('Put request update entire user',async({request})=>{
    const response=await request.put('https://jsonplaceholder.typicode.com/users/1',
        {
            data:{
                name:'will',
                email:'will@gmail.com',
                phone:'34234523435'
            }

        }
    )
    expect(response.status()).toBe(200)
    const responseBody=await response.json()
    console.log(responseBody)
    expect(responseBody.email).toBe('will@gmail.com')
            
})

test.only('Delete',async({request})=>{
    const response=await request.delete('https://jsonplaceholder.typicode.com/users/1')
    expect(response.status()).toBe(200)
   console.log('User Deleted')
            
})