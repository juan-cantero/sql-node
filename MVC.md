
# Model-View-Controller(MVC) architecture for Node applications

MVC is an acronym for Model-View-Controller.
It is a design pattern for software projects. It is used majorly by Node developers and by C#, Ruby, PHP framework users too.
In MVC pattern, application and its development are divided into three interconnected parts. The advantage of this is it helps in focusing on a specific part of the application name, the ways information is presented to and accepted from, the user. It helps in allowing for efficient code reuse and the parallel development of the application. Even if the project structure might look a little different than an ideal MVC structure, the basic program flow in and out the application remains the same.

In this post, the program flow between these components of an application will be shown by creating a demo application.

First, lets get through with what these parts of the application mean and what functions they perform.


## Explanation

***Model***: Model represents the structure of data, the format and the constraints with which it is stored. It maintains the data of the application. Essentially, it is the database part of the application.

***View***: View is what is presented to the user. Views utilize the Model and present data in a form in which the user wants. A user can also be allowed to make changes to the data presented to the user. They consist of static and dynamic pages which are rendered or sent to the user when the user requests them.

***Controller*** :Controller controls the requests of the user and then generates appropriate response which is fed to the viewer. Typically, the user interacts with the View, which in turn generates the appropriate request, this request will be handled by a controller. The controller renders the appropriate view with the model data as a response.
So, to sum it up:

    Model is data part.
    View is User Interface part.
    Controller is request-response handler.
