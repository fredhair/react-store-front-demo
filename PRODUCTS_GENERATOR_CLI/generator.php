<?php

require_once 'vendor/autoload.php';

$faker = Faker\Factory::create();

$options = getopt("c:");

if(!is_numeric($options["c"])) {
  exit('please use an integer value for -c');
}

if(empty($options["c"])) {
  $count = 10;
} else {
  $count = $options["c"];
}

$categories = $faker->words(round($count * 0.25));

for($i = 0; $i < $count; $i++) {
  $products[$i]["id"] = $i;
  $products[$i]["name"] = $faker->word;
  $products[$i]["price"] = $faker->randomFloat(2, 0, 50);
  $products[$i]["category"] = $faker->randomElement($categories);
  $products[$i]["barcode"] = $faker->ean8();
  $products[$i]["description"] = $faker->realText(160);
}

echo json_encode($products, JSON_PRETTY_PRINT);