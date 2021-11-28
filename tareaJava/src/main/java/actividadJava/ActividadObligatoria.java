package actividadJava;

import java.util.Scanner;

public class ActividadObligatoria {

    
   public static void main(String[] args ){
       Scanner entrada = new Scanner(System.in);
       System.out.println("Ingresa tu nombre:");
       String nombre = entrada.next();
       System.out.println("Ingrese su apellido:");
       String apellido = entrada.next();
       System.out.println("Ingrese su edad:");
       int edad = entrada.nextInt();
       System.out.println("Ingrese su hobbie:");
       String hobbie = entrada.next();
       System.out.println("Ingrese su editor de código preferido:");
       String codigo = entrada.next();
       System.out.println("Ingrese el sistema operativo que usa:");
       String sistema = entrada.next();
        
       System.out.println("Bienvenido "+ nombre + " " + apellido + ".");
       System.out.println("Su edad es "+ edad);
       System.out.println("Su hobbie es "+ hobbie);
       System.out.println("Su editor de código favorito es" + codigo);
       System.out.println("Su sistema operativo es "+ sistema);
            
    }    
}
