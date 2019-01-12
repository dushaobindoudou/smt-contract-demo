pragma solidity ^0.5.0;

library ConvertLib{
	function convert(uint amount,uint conversionRate) public pure returns (uint convertedAmount)
	{
		amount = amount + 10;
		return amount * conversionRate;
	}
}
