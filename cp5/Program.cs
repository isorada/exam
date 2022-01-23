using System;
using cp5.Vent;
/* 
    !! Before running this project do 'cd "c:\(File Location)"' !!
    To-Do List
    Calculator (If, else & Switch Case method)
    Loop
*/
namespace cp5
{
    internal class Program
    {
// To-Do List
        public static String[] toDo = new String[4] {"Calculator", "Loop", "Stack and Heap", "Amogus"};
// Stack and Heap Respiratory
        public static void STACK()
        {
            Console.Clear();
            Console.WriteLine("Input array size!");
            int size = Convert.ToInt32(Console.In.ReadLine());
            int size1 = size;

            String[] stack = new String[size];
            Console.WriteLine("Input " + size + " Words!");
        // Stacking 
            for (int i=0; i < stack.Length; i++) {
                stack[i] = Console.ReadLine();
            }
        // Stack output
            Console.WriteLine("Here's your output");
            for (int i=0; i < stack.Length; i++) 
            {
                Console.WriteLine(stack[i]);
            }
        // Heap
            Console.WriteLine("Deleting words");
            for (int i=0; i < size; size--) 
            {
                Console.WriteLine("-"+size);
            }
        // Stack & Heap output
            Console.WriteLine("Final Output: \n" + "Stacked: \n" + size1 + "\nBurned: \n" + size1);
            Console.ReadLine();
            Console.Clear();
            Main();
        }
// Stack and Heap Intro
        public static void SAH()
        {
            Console.Clear();
            Console.WriteLine("Welcome to my Stack and Heap!");
            Console.ReadLine();
            STACK();
        }
// Loop
        public static void LOOP()
        {
            Console.Clear();

            int i = 9000;

            Console.WriteLine("Prepare to CTRL+C! \nType exit to back out now!");
            
            if (Console.ReadLine() == "exit") {
                Main();
            } else {}

            while (i > 0) {
                i--;
                Console.WriteLine("01");
            }
            Console.Clear();
            Console.WriteLine("Oof! Let me take a quick break!");
            Console.ReadLine();
            Main();
        }
// The Calculator
        // Calc Addition
        public static void Addition()
        {
            Console.WriteLine("Input a Number!");
            int x = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine(x + " Plus?");
            int y = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("The output of the numbers you chose is "+ (x+y));
            if (Console.ReadLine() == "exit") 
            
            {
                Main();
            } else 
            {
                Console.Clear();
                Addition();
            }
        }
        // Calc Subtraction
        public static void Subtraction()
        {
            Console.WriteLine("Input a Number!");
            int x = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine(x + " Minus?");
            int y = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("The output of the numbers you chose is "+ (x-y));
            
            if (Console.ReadLine() == "exit") 
            {
                Main();
            } else 
            {
                Console.Clear();
                Subtraction();
            }
        }
        // Calc Division
        public static void Division()
        {
            Console.WriteLine("Input a Number!");
            int x = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine(x + " Divided by?");
            int y = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("The output of the numbers you chose is "+ (x/y));
            if (Console.ReadLine() == "exit") 
            {
                Main();
            } else 
            {
                Console.Clear();
                Division();
            }
        }
        // Calc Multiplication
        public static void Multiplication()
        {
            Console.WriteLine("Input a Number!");
            int x = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine(x + " Multiplied by?");
            int y = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("The output of the numbers you chose is "+ (x*y));
            if (Console.ReadLine() == "exit") 
            {
                Main();
            } else 
            {
                Console.Clear();
                Multiplication();
            }
        }
// Calc Intro
        public static void Calc()
        {
            Console.Clear();
            Console.WriteLine("Welcome to my calculator"+"\nType 'addition', 'subtraction', 'division', and 'multiplication' to function");
            
            string choice = Console.ReadLine();
            switch(choice.ToLower())
            {
                case "addition":
                    Console.Clear();
                    Addition();
                break;
                
                case "subtraction":
                    Console.Clear();
                    Subtraction();
                break;

                case "division":
                    Console.Clear();
                    Division();
                break;

                case "multiplication":
                    Console.Clear();
                    Multiplication();
                break;
            }
        }
// Features/Choices
        public static void Response()
        {
            string response = Console.ReadLine();
            switch (response.ToLower())
            {
                case "features":
                    Console.Clear();

                    Console.WriteLine("\nWhat would you like to do? \n"
                    + "Use "+toDo[0] + "," + " See some "+toDo[1] + "," + " Try "+toDo[2] + "," + " Sus " +toDo[3] );

                    Response();
                break;

                case "calculator":
                    Calc();
                break;

                case "Loop":
                    LOOP();
                break;

                case "stack and heap":
                    SAH();
                break;

                case "amogus":
                    Amogus amogus = new Amogus();
                    amogus.ohNo = "STOP!";
                    amogus.EJECT();
                break;

                default:
                    Main();
                break;
            }
        } 
// Main
        static void Main()
        {
            Console.Clear();
            Console.WriteLine("Hello! \nWelcome To Greem!\nType Features to list all my features!");
            
            Response();
        }
    }
}