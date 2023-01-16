<template>

<div class="recruitmentAnnouncement flex flex-column justify-content-center align-items-center">
  <div class="text-4xl text-center">
    <div>Производим набор в секцию</div>
    <h1 class="my-3 text-pink-600">ДЗЮДО</h1>
    <div>Тренер:</div>
    <div class="font-bold">Шемяков Владимир Иванович</div>
  </div>
  <div class="my-3 text-xl">
    <ul>
      <li>Уникальная авторская методика</li>
      <li>Индивидуальный подход к каждому ребенку</li>
      <li>Родители могут заниматься вместе с детьми</li>
    </ul>
  </div>
  <div class="mt-2 overflow-auto">
    <table class="w-full text-lg font-semibold">
      <thead>
        <tr>
          <th>День недели</th>
          <th>Секция</th>
          <th>Время</th>
          <th>Возраст</th>
          <th>Место проведения</th>
        </tr>
      </thead>
      <tbody>

        <tr>
          <td rowspan="2">Понедельник</td>
          <td class="text-pink-600">Дзюдо</td>
          <td class="text-pink-600">17:00 - 19:00</td>
          <td>от 4 лет</td>
          <td rowspan="2" class="text-right">ул. Энергетиков 2, д. 22</td>
        </tr>
        <tr>
          <td class="text-green-600">ОФП</td>
          <td class="text-green-600">19:00 - 20:00</td>
          <td></td>
        </tr>

        <tr>
          <td rowspan="2">Вторник</td>
          <td class="text-pink-600">Дзюдо</td>
          <td class="text-pink-600">17:00 - 19:00</td>
          <td>от 4 лет</td>
          <td rowspan="2" class="text-right">ул. Комарова 8</td>
        </tr>
        <tr>
          <td class="text-green-600">ОФП</td>
          <td class="text-green-600">19:00 - 20:00</td>
          <td></td>
        </tr>

        <tr>
          <td rowspan="2">Среда</td>
          <td class="text-pink-600">Дзюдо</td>
          <td class="text-pink-600">17:00 - 19:00</td>
          <td>от 4 лет</td>
          <td rowspan="2" class="text-right">ул. Энергетиков 2, д. 22</td>
        </tr>
        <tr>
          <td class="text-green-600">ОФП</td>
          <td class="text-green-600">19:00 - 20:00</td>
          <td></td>
        </tr>

        <tr>
          <td rowspan="2">Четверг</td>
          <td class="text-pink-600">Дзюдо</td>
          <td class="text-pink-600">17:00 - 19:00</td>
          <td>от 4 лет</td>
          <td rowspan="2" class="text-right">ул. Комарова 8</td>
        </tr>
        <tr>
          <td class="text-green-600">ОФП</td>
          <td class="text-green-600">19:00 - 20:00</td>
          <td></td>
        </tr>

        <tr>
          <td rowspan="2">Пятница</td>
          <td class="text-pink-600">Дзюдо</td>
          <td class="text-pink-600">17:00 - 19:00</td>
          <td>от 4 лет</td>
          <td rowspan="2" class="text-right">ул. Энергетиков 2, д. 22</td>
        </tr>
        <tr>
          <td class="text-green-600">ОФП</td>
          <td class="text-green-600">19:00 - 20:00</td>
          <td></td>
        </tr>

        <tr>
          <td rowspan="2">Суббота</td>
          <td class="text-pink-600">Дзюдо</td>
          <td class="text-pink-600">17:00 - 19:00</td>
          <td>от 4 лет</td>
          <td rowspan="2" class="text-right">ул. Комарова 8</td>
        </tr>
        <tr>
          <td class="text-green-600">ОФП</td>
          <td class="text-green-600">19:00 - 20:00</td>
          <td></td>
        </tr>

      </tbody>
    </table>
  </div>
</div>

</template>

<script setup lang="ts">

</script>

<style lang="sass" scoped>

table
  border-collapse: collapse

th, td
  border-bottom: 1px solid var(--surface-400)
  padding: 10px 22px
  color: var(--gray-800)
th
  background-color: var(--blue-400)
  color: var(--surface-a)

</style>