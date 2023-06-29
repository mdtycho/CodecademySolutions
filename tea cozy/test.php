<?php

//Noah Smart
//adds the values together and outputs the answer

$number_one = readline('enter the first number: ');
$number_two = readline('enter the 2nd number: ');
$number_three = readline('enter the 3rd number: ');
$number_four = readline('enter the 4th number: ');

$add = $number_one + $number_two + $number_three + $number_four;

$add_total = 'The four variables added together = ';

print ( $add_total . $add . "\n" );

//subtracts the values and outputs the answer

$subtract = $number_one - $number_two - $number_three - $number_four;

$subtract_total = 'The four variables subtracted together = ';

print ( $subtract_total . $subtract . "\n" );

//multiplies the values and outputs the answer

$multiplies = $number_one * $number_two * $number_three * $number_four;

$multiplies_total = 'The four variables multiplied together = ';

print ( $multiplies_total . $multiplies . "\n" );

//dividies the values and outputs the answer

$dividies = $number_one / $number_two / $number_three / $number_four;

$dividies_total = 'The four variables divided together = ';

print ( $dividies_total . $dividies . "\n" );

//comination of the above and outputs the answer

$combine = $number_four + $number_one - $number_three * $number_two;

$combine_total = 'The four variables combined together = ';

print ( $combine_total . $combine . "\n" );

?>