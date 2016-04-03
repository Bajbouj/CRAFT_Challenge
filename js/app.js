var app = angular.module("monApp",[]);
app.controller("MainCltr",function($scope){
$scope.experiences =[
  {year:"01/2015 – 07/2015",entreprise:"Société SFM Telecom, Avenue Hédi Chaker, Tunis, Tunisie",project:"Intégré une équipe de 7 personnes en utilisant SCRUM pour concevoir, développer et intégrer un module de back office de l’ERP du groupe SFM."}
,{year:"01/2011 – 05/2011",entreprise:"Société info6, El manzeh 9, Ariana , Tunisie",project:"Intégré une équipe de 2 personnes pour concevoir et développer une application de gestion d’une auto-école (Java, Swing, Singleton, DAO, Sms API, Mail API, jFreeChart API)."}];
$scope.details={name:"Mohamed Jridi",job:"Ingénieur informatique",email:"mohamed.jridi908@gmail.com",linkedin:"https://tn.linkedin.com/in/mohamed-jridi-5504ab98",phone:"(+216) 53 177 776",adress:"1,rue syrie,cité Amal Denden 2011, Tunisie"};
$scope.formations=[
{year:"2011-2008",uneversity:"École Supérieure Privée D’Ingénierie et de Technologies (ESPRIT) - Ariana, Tunisie",diplome:"Diplôme National d’Ingénieur, spécialité Génie Logiciel"},
{year:"2012–2015",uneversity:"Faculté des Sciences de Tunis (FST), Tunis, Tunisie",diplome:"Licence Fondamentale en Science de l’Informatique"},
{year:"2008-2004",uneversity:"Lycée Ibn Abi Dhief, Manouba, Tunisie",diplome:"Baccalauréat en Mathématiques"}];
$scope.projets=[{date:"02/2014-05/2014",subject:"Mené une équipe de 5 pour concevoir et développer un site web de recherche de covoiturage et de colocataire (EJB, JPA, Swing, Junit, JSF, Services Web, .NET, Android)"},
{date:"02/2013-05-2013",subject:"Travaillé en binôme et développé une application de gestion d’une agence de location des voitures (Java, Swing, Singleton, DAO, Api Sms, Api Mail, chart, Jasper)"}];
$scope.loisirs=["Football"," Natation", "Handball"," Musique"," Cinéma"," Jeux vidéo"," Lecture"];
});
