<template>

<div class="recruitmentAnnouncement">
  <div class="mainText">
    <div>Производим набор в секцию</div>
    <h1 class="judoText">ДЗЮДО</h1>
    <div>Тренер:</div>
    <b><div>Шемяков Владимир Иванович</div></b>
  </div>
  <div class="peculiarities">
    <ul>
      <li>Уникальная авторская методика</li>
      <li>Индивидуальный подход к каждому ребенку</li>
      <li>Родители могут заниматься вместе с детьми</li>
    </ul>
  </div>
  <div class="schedule">
    <table>
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
          <td style="color: #c61a54;">Дзюдо</td>
          <td style="color: #c61a54;">17:00 - 19:00</td>
          <td>от 4 лет</td>
          <td rowspan="2" style="text-align: right;">ул. Энергетиков 2, д. 22</td>
        </tr>
        <tr>
          <td style="color: #419544;">ОФП</td>
          <td style="color: #419544;">19:00 - 20:00</td>
          <td></td>
        </tr>

        <tr>
          <td rowspan="2">Вторник</td>
          <td style="color: #c61a54;">Дзюдо</td>
          <td style="color: #c61a54;">17:00 - 19:00</td>
          <td>от 4 лет</td>
          <td rowspan="2" style="text-align: right;">ул. Комарова 8</td>
        </tr>
        <tr>
          <td style="color: #419544;">ОФП</td>
          <td style="color: #419544;">19:00 - 20:00</td>
          <td></td>
        </tr>

        <tr>
          <td rowspan="2">Среда</td>
          <td style="color: #c61a54;">Дзюдо</td>
          <td style="color: #c61a54;">17:00 - 19:00</td>
          <td>от 4 лет</td>
          <td rowspan="2" style="text-align: right;">ул. Энергетиков 2, д. 22</td>
        </tr>
        <tr>
          <td style="color: #419544;">ОФП</td>
          <td style="color: #419544;">19:00 - 20:00</td>
          <td></td>
        </tr>

        <tr>
          <td rowspan="2">Четверг</td>
          <td style="color: #c61a54;">Дзюдо</td>
          <td style="color: #c61a54;">17:00 - 19:00</td>
          <td>от 4 лет</td>
          <td rowspan="2" style="text-align: right;">ул. Комарова 8</td>
        </tr>
        <tr>
          <td style="color: #419544;">ОФП</td>
          <td style="color: #419544;">19:00 - 20:00</td>
          <td></td>
        </tr>

        <tr>
          <td rowspan="2">Пятница</td>
          <td style="color: #c61a54;">Дзюдо</td>
          <td style="color: #c61a54;">17:00 - 19:00</td>
          <td>от 4 лет</td>
          <td rowspan="2" style="text-align: right;">ул. Энергетиков 2, д. 22</td>
        </tr>
        <tr>
          <td style="color: #419544;">ОФП</td>
          <td style="color: #419544;">19:00 - 20:00</td>
          <td></td>
        </tr>

        <tr>
          <td rowspan="2">Суббота</td>
          <td style="color: #c61a54;">Дзюдо</td>
          <td style="color: #c61a54;">17:00 - 19:00</td>
          <td>от 4 лет</td>
          <td rowspan="2" style="text-align: right;">ул. Комарова 8</td>
        </tr>
        <tr>
          <td style="color: #419544;">ОФП</td>
          <td style="color: #419544;">19:00 - 20:00</td>
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

.recruitmentAnnouncement
  display: flex

  flex-direction: column
  justify-content: center
  align-items: center

  font-family: 'PT Serif', serif

.mainText
  font-size: 2rem

  div
    margin-top: 12px

    text-align: center

  .judoText
    margin-top: 12px

    text-align: center
    font-size: 3rem
    font-weight: bold
    color: #c61a54


.peculiarities
  margin: 20px 0

  font-size: 1.2rem

.schedule
  margin-top: 22px
  overflow-x: auto

  table
    width: 100%
    border-collapse: collapse
    font-size: 1.1rem
    font-weight: 600
  th, td
    border-bottom: 1px solid #ddd
    padding: 10px 22px
    color: #424242
  th
    background-color: #4baaf5
    color: white

</style>