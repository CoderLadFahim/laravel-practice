<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Todo;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\AppModelsTodo>
 */
class TodoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    protected $model = Todo::class;

    public function definition()
    {
        return [
            'name' => $this->faker->sentence(),
            'is_completed' => $this->faker->boolean(),
            'category_id' => Category::factory()->create()->id,
        ];
    }
}

