first: "Ado",
last: "Lovelace",
born: 1840
}
})
.then(function(docRef) {
console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
console.error("Error adding document: ", error);
});
readAll = () => db.collection("users").get().then((querySnapshot) => {
querySnapshot.forEach((doc) => {
console.log(`${doc.id} => ${doc.data().first}`);
});
});
</script>

</body>