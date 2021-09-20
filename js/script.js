//Missing number Challenge Arrow Function. 

const missingNumber = (nums) => {


	if(nums.length === 0) return 0;
	
	result = 0;

	for (let i=0; i< nums.length; i++) {
		result = nums[i] - i + result;
	}
	return nums.length - result;
};

console.log(missingNumber([3,0,1]));


