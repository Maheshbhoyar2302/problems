// 1. Print all even numbers in first 50 natural numbers
	// HINT: google how to determine if a number is even or not


	for(let count=1; count <=50; count++){
		if(count % 2 === 0){
			console.log(count);
		}
	}


// 2. print all odd numbers in natural numbers from 20 to 50
	// HINT: google how to determine if a number is odd or not
	for(let count = 20; count < 50; count++){
		if(count % 2 === 0){
			console.log(count + 1);
		}
	}

// 3. print all numbers that are divisible by 5
// 	[12, 45, 67, 89, 90, 34, 35, 55]
	// HINT: google how to check divisibility by a number

	// const arr = [12, 45, 67, 89, 90, 34, 35, 55];
	for(let item = 0; item < arr.length; item++){
		if(arr[item] % 5 === 0){
			console.log(arr[item]);
		}
	}

// 4. Print all numbers of this array
// 	 [[1,2], [3,4], [5,6], [7,8]]
	// HINT: use nested loops
	// const two_d_array =  [[1,2], [3,4], [5,6], [7,8]];
	for(let i = 0; i < two_d_array[i].length; i++){
	
		for(let j = 0; j < two_d_array.length; j++){
			console.log(two_d_array[j][i]);
		}
	}
    
// 5. Print all prime numbers occurring in 1st 50 natural numbers
	// HINT1: google how to check if a number is prime or not
    // HINT2: use nested loops
	function isPrime(n){
		if(n <= 1){
			return false;
		}
		const c = 2;
		while(c*c <= n){
			if(n % c ===0){
				return false;
			}
			c++;
		}
		return c*c > n;
	}

	console.log(isPrime(50));